export function texQuoteWithLetterHead(header: string, footer: string): string {
  return String.raw`\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage{times}
\usepackage[top=5cm,bottom=3cm,left=0.6in,right=0.6in,headheight=2cm,footskip=3cm,marginparwidth=2cm]{geometry}
\usepackage{array}
\usepackage{parskip}

\usepackage{tikz}
\usepackage{tikzpagenodes}
\usepackage{fancyhdr}             % For header and footer customization
\usepackage{graphicx}             % For inserting images
\usepackage{setspace}

%custom template layout
\newcommand{\mypage}{%
\begin{tikzpicture}[remember picture, overlay]
    % Header image spanning the full width of the page
    \node[anchor=north west] at ([yshift=1.5mm]current page.north west) {
        \hspace{-0.27cm}
        \includegraphics[width=\paperwidth]{${header}}
    };

    \node at (current page footer area) { \hspace{-0.15cm}
        \includegraphics[width=\paperwidth]{${footer}}
        };
\end{tikzpicture}
}%


%load page style
\fancypagestyle{MyPageStyle}{%
  \fancyhf{}
  \fancyhead[C]{\mypage}
  \renewcommand{\headrulewidth}{0pt}
}%

\pagestyle{MyPageStyle}


\title{test}
\author{Kedar Joshi}
\date{December 2024}

\begin{document}


\begin{spacing}{1.1}
\hspace{14.5cm}\textbf{Date :} 15 / 11 / 2024
\medskip
\hspace{13.5cm}\textbf{Quote No. : } 20250101/001
\end{spacing}
To,

\begin{spacing}{1.1}
\hspace{0.8cm}\textbf{Electork Motors LLP}, \\
\smallskip
\hspace{0.8cm}Kedar Sanjay Joshi,\\
\smallskip
\hspace{0.8cm}304, Vitthal Park, Radhanagari Road, \\
\smallskip
\hspace{0.8cm}Kolhapur, Maharashtra - 416012 \\
\smallskip
\hspace{0.8cm}+91 8657629696
\end{spacing}

\begin{center}
    \large{\textbf{\underline{Quotation for Bakery Machinary}}}
\end{center}

\begin{center}
    \begin{tabular}{| p{1.2cm} | p{4cm}| p{5.5cm} | p{1.5cm} | p{1.5cm} | p{1.5cm} |}
        \hline
        Sr.No.& Machine & Specification & Quantity & Rate & Amount \\
        \hline
        Sr.No.& Machine & Specification & Quantity & Rate & Amount \\
        \hline
    \end{tabular}
\end{center}
\vspace{0.5cm}

\textbf{Terms \& Conditions :}

The above prices are Ex. Works at Five Star MIDC, Kagal - Kolhapur. Octroi or any other local taxes \& Duties prevail in your state should borne by you. Once order placed it should not be cancelled at any cost. The advance should not be returned in any case if the order is cancelled. Transportation and Insurance in your scope. If any taxes applicable at the time of delivery or bill and not included in above Price it will be charged Extra at actual. This quotation is valid for 60 days only.

\textbf{Payment :}

60 \% advance against your confirmed purchase order. 40 \% balance amount against proforma invoice before dispatch.

\textbf{Delivery :}\\
The delivery period of the total equipment will be 6 to 8 weeks from your confirmed purchase order along with advance and your fully clarified purchase order both technically and commercially accepted \& signed by you \& our authorized representative with company seal. But the delivery may be delays in certain conditions beyond our control. If you cannot take delivery as specified in your purchase order, we will charge 5\% of demurrage charges on the Purchase Order amount per week and it will be binding to you.

\textbf{Guarantee :}

We guarantee the performance of the equipment for a period of 1 year from the date of supply. The guarantee does not cover any electrical parts and heating elements, also any mechanical damages during process or misuse, mistake by operator. The guarantee will become null and void if the equipment is repaired without our written consent.

\textbf{Jurisdiction :}
Subject to Kolhapur Jurisdiction only.

Our all above Terms and Conditions are binding to the Customers after placing the order.

\textbf{Installation :}

Installation Charges Extra.

Thanking You,\\
Yours Sincerely,



\end{document}`;
}

export const texQuoteWithoutLetterHead: string = String.raw`\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage{times}
\usepackage[top=5cm,bottom=3cm,left=0.6in,right=0.6in,headheight=2cm,footskip=3cm,marginparwidth=2cm]{geometry}
\usepackage{array}
\usepackage{parskip}

\usepackage{setspace}

\title{test}
\author{Kedar Joshi}
\date{December 2024}

\begin{document}


\begin{spacing}{1.1}
\hspace{14.5cm}\textbf{Date :} 15 / 11 / 2024
\medskip
\hspace{13.5cm}\textbf{Quote No. : } 20250101/001
\end{spacing}
To,

\begin{spacing}{1.1}
\hspace{0.8cm}\textbf{Electork Motors LLP}, \\
\smallskip
\hspace{0.8cm}Kedar Sanjay Joshi,\\
\smallskip
\hspace{0.8cm}304, Vitthal Park, Radhanagari Road, \\
\smallskip
\hspace{0.8cm}Kolhapur, Maharashtra - 416012 \\
\smallskip
\hspace{0.8cm}+91 8657629696
\end{spacing}

\begin{center}
    \large{\textbf{\underline{Quotation for Bakery Machinary}}}
\end{center}

\begin{center}
    \begin{tabular}{| p{1.2cm} | p{4cm}| p{5.5cm} | p{1.5cm} | p{1.5cm} | p{1.5cm} |}
        \hline
        Sr.No.& Machine & Specification & Quantity & Rate & Amount \\
        \hline
        Sr.No.& Machine & Specification & Quantity & Rate & Amount \\
        \hline
    \end{tabular}
\end{center}
\vspace{0.5cm}

\textbf{Terms \& Conditions :}

The above prices are Ex. Works at Five Star MIDC, Kagal - Kolhapur. Octroi or any other local taxes \& Duties prevail in your state should borne by you. Once order placed it should not be cancelled at any cost. The advance should not be returned in any case if the order is cancelled. Transportation and Insurance in your scope. If any taxes applicable at the time of delivery or bill and not included in above Price it will be charged Extra at actual. This quotation is valid for 60 days only.

\textbf{Payment :}

60 \% advance against your confirmed purchase order. 40 \% balance amount against proforma invoice before dispatch.

\textbf{Delivery :}\\
The delivery period of the total equipment will be 6 to 8 weeks from your confirmed purchase order along with advance and your fully clarified purchase order both technically and commercially accepted \& signed by you \& our authorized representative with company seal. But the delivery may be delays in certain conditions beyond our control. If you cannot take delivery as specified in your purchase order, we will charge 5\% of demurrage charges on the Purchase Order amount per week and it will be binding to you.

\textbf{Guarantee :}

We guarantee the performance of the equipment for a period of 1 year from the date of supply. The guarantee does not cover any electrical parts and heating elements, also any mechanical damages during process or misuse, mistake by operator. The guarantee will become null and void if the equipment is repaired without our written consent.

\textbf{Jurisdiction :}
Subject to Kolhapur Jurisdiction only.

Our all above Terms and Conditions are binding to the Customers after placing the order.

\textbf{Installation :}

Installation Charges Extra.

Thanking You,\\
Yours Sincerely,



\end{document}`;

export const konark_footer: string =
  "https://utfs.io/a/y159wic1c5/Rm5JWFP0XzdVD0QXcziCQfvPN5wdpKlenMXqjuAxsRVt9HC3";

export const konark_header: string =
  "https://utfs.io/a/y159wic1c5/Rm5JWFP0XzdVSMDwrCeEgHiqMsUvhNKZPCOeD7Lmy8TnjGfF";
