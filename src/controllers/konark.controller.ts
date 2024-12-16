import { NextFunction, Request, Response } from "express";
import fs from "fs-extra";
import createHttpError from "http-errors";
import {
  konark_footer,
  konark_header,
  texQuoteWithLetterHead,
  texQuoteWithoutLetterHead,
} from "../utils/konarkQuote";
import axios from "axios";
import path from "path";
import { ReadableStream } from "node:stream/web";
import runPdflatex from "../utils/pdflatex";

export const getQuotePdf = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const dirName = path.resolve(__dirname);

  // Define file paths
  const tempPath = path.join(dirName, "..", "temp");

  // Create a temporary directory
  await fs.ensureDir(tempPath);

  const headerPath = path.join(tempPath, "konarkHeader.png");
  const footerPath = path.join(tempPath, "konarkFooter.png");

  const data = req.body.data;
  if (!data) return next(createHttpError.BadRequest());
  const { withLetterHead, ...quoteData } = data;

  const headerImageRes = await axios.get(konark_header, {
    responseType: "arraybuffer",
  });
  if (headerImageRes.status != 200)
    return next(
      createHttpError.InternalServerError("Failed to download Header"),
    );
  const footerImageRes = await axios.get(konark_footer, {
    responseType: "arraybuffer",
  });
  if (footerImageRes.status != 200)
    return next(
      createHttpError.InternalServerError("Failed to download Header"),
    );

  fs.writeFileSync(headerPath, Buffer.from(headerImageRes.data));
  fs.writeFileSync(footerPath, Buffer.from(footerImageRes.data));

  const quoteTemplate = withLetterHead
    ? texQuoteWithLetterHead(headerPath, footerPath)
    : texQuoteWithoutLetterHead;

  const texFilePath = path.join(tempPath, "document.tex");
  const pdfFilePath = path.join(tempPath, "document.pdf");

  try {
    // Create a temporary directory
    await fs.ensureDir(tempPath);

    // Write the LaTeX content to a .tex file
    await fs.writeFile(texFilePath, quoteTemplate);

    await runPdflatex(texFilePath, tempPath);
    await runPdflatex(texFilePath, tempPath);

    // Check if the PDF file exists
    if (!fs.existsSync(pdfFilePath)) {
      console.error("PDF not found after compilation");
      return next(createHttpError(500, "PDF not found after compilation."));
    }

    // Send the PDF file to the user as a download
    return res.download(pdfFilePath, "output.pdf", async () => {
      // Cleanup the temporary files
      await fs.remove(tempPath);
    });
  } catch (err) {
    console.error("Error generating PDF:", err);
    next(createHttpError(500, "Unexpected error occurred."));
  }
};
