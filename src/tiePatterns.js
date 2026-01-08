// tiePatterns.js

export const tiePatterns = [
  // -----------------------
  // CLASSIC & STRIPES
  // -----------------------
  {
    name: "orange-blue-squares",
    background: `
      repeating-linear-gradient(
        0deg,
        #e67e22 0px,
        #e67e22 20px,
        #1f3a5f 20px,
        #1f3a5f 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 20px,
        rgba(255,255,255,0.2) 20px,
        rgba(255,255,255,0.2) 40px
      )
    `,
  },

  {
    name: "mint-floral",
    background: `
      radial-gradient(circle at 8px 8px,
        #b3e5dc 2px,
        transparent 3px),
      linear-gradient(#9fe0c3, #7fcfb2)
    `,
    backgroundSize: "18px 18px, cover",
  },

  {
    name: "green-argyle",
    background: `
      repeating-linear-gradient(
        45deg,
        #1f3d2b 0px,
        #1f3d2b 20px,
        #0f1f17 20px,
        #0f1f17 40px
      )
    `,
  },

  {
  name: "light-green-plaid",
  background: `
    repeating-linear-gradient(
      0deg,
      rgba(184, 216, 193, 0.6) 0px,
      rgba(184, 216, 193, 0.6) 18px,
      transparent 18px,
      transparent 24px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(123, 183, 217, 0.6) 0px,
      rgba(123, 183, 217, 0.6) 18px,
      transparent 18px,
      transparent 24px
    ),
    linear-gradient(#cfe6d8, #b6d4c4)
  `,
  },

  {
    name: "navy-polka",
    background: `
      radial-gradient(circle at 6px 6px,
        #bcd7ff 2px,
        transparent 3px),
      linear-gradient(#1c2b44, #1c2b44)
    `,
    backgroundSize: "14px 14px, cover",
  },

  {
  name: "royal-plaid",
  background: `
    repeating-linear-gradient(
      0deg,
      rgba(28, 63, 112, 0.65) 0px,
      rgba(28, 63, 112, 0.65) 16px,
      transparent 16px,
      transparent 22px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(210, 180, 140, 0.55) 0px,
      rgba(210, 180, 140, 0.55) 16px,
      transparent 16px,
      transparent 22px
    ),
    linear-gradient(#1c3f70, #132b4a)
  `,
  },

  // ==========================
  // NEW CUSTOM TIE PATTERNS
  // ==========================

  {
    name: "light-green-tan-blue-navy-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(144, 238, 144, 0.6) 0px,
        rgba(144, 238, 144, 0.6) 18px,
        rgba(210, 180, 140, 0.6) 18px,
        rgba(210, 180, 140, 0.6) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(173, 216, 230, 0.6) 0px,
        rgba(173, 216, 230, 0.6) 18px,
        rgba(0, 0, 128, 0.6) 18px,
        rgba(0, 0, 128, 0.6) 22px
      ),
      linear-gradient(#cfe6d8, #b6d4c4)
    `,
  },

  {
    name: "royal-blue-tan-black-navy-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(65, 105, 225, 0.65) 0px,
        rgba(65, 105, 225, 0.65) 16px,
        rgba(210, 180, 140, 0.55) 16px,
        rgba(210, 180, 140, 0.55) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0,0,0,0.5) 0px,
        rgba(0,0,0,0.5) 16px,
        rgba(0,0,128,0.5) 16px,
        rgba(0,0,128,0.5) 22px
      ),
      linear-gradient(#1a3a70, #0f2340)
    `,
  },

  {
    name: "dark-red-light-purple-horizontal",
    background: `
      repeating-linear-gradient(
        0deg,
        #8B0000 0px,
        #8B0000 18px,
        #D8BFD8 12px,
        #D8BFD8 12px
      )
    `,
  },

  {
    name: "magenta-lightpink-burgundy-navy-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #802580ff 0px,
        #802580ff 14px,
        #FFB6C1 8px,
        #FFB6C1 8px,
        #800020 20px,
        #800020 26px,
        #000080 12px,
        #000080 12px
      )
    `,
  },

  {
    name: "grey-thin-pink-blue-navy-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(211, 211, 211, 0.6) 0px,
        rgba(211, 211, 211, 0.6) 14px,
        rgba(255,182,193,0.6) 14px,
        rgba(255,182,193,0.6) 18px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0,0,128,0.6) 0px,
        rgba(0,0,128,0.6) 14px,
        rgba(211,211,211,0.3) 14px,
        rgba(211,211,211,0.3) 18px
      ),
      linear-gradient(#999, #777)
    `,
  },

  {
    name: "black-purple-white-grey-blue-stripes",
    background: `
      repeating-linear-gradient(
        45deg,
        #000000 0px,
        #000000 14px,
        #800080 14px,
        #800080 18px,
        #FFFFFF 18px,
        #FFFFFF 22px,
        #808080 22px,
        #808080 26px,
        #4682B4 26px,
        #4682B4 30px
      )
    `,
  },

  {
    name: "orange-green-blue-tan-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(255,165,0,0.6) 0px,
        rgba(255,165,0,0.6) 16px,
        rgba(0,128,0,0.6) 16px,
        rgba(0,128,0,0.6) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(70,130,180,0.6) 0px,
        rgba(70,130,180,0.6) 16px,
        rgba(210,180,140,0.6) 16px,
        rgba(210,180,140,0.6) 22px
      ),
      linear-gradient(#FFA500, #FF8C00)
    `,
  },

  {
    name: "gold-navy-grey-white-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(255,215,0,0.6) 0px,
        rgba(255,215,0,0.6) 16px,
        rgba(0,0,128,0.6) 16px,
        rgba(0,0,128,0.6) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(169,169,169,0.6) 0px,
        rgba(169,169,169,0.6) 16px,
        rgba(255,255,255,0.5) 16px,
        rgba(255,255,255,0.5) 22px
      ),
      linear-gradient(#FFD700, #B8860B)
    `,
  },

  {
    name: "burgundy-grey-blue-navy-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(128,0,32,0.65) 0px,
        rgba(128,0,32,0.65) 18px,
        rgba(169,169,169,0.55) 18px,
        rgba(169,169,169,0.55) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(70,130,180,0.6) 0px,
        rgba(70,130,180,0.6) 18px,
        rgba(0,0,128,0.5) 18px,
        rgba(0,0,128,0.5) 24px
      ),
      linear-gradient(#800020, #4d001a)
    `,
  },

  {
    name: "brown-thin-white-blue-stripes",
    background: `
      repeating-linear-gradient(
        0deg,
        #8B4513 0px,
        #8B4513 16px,
        #FFFFFF 8px,
        #FFFFFF 8px,
        #ADD8E6 12px,
        #ADD8E6 12px
      )
    `,
  },

  {
    name: "grey-red-black-plaid",
    background: `
      repeating-linear-gradient(
        45deg,
        #808080 0px,
        #808080 20px,
        #800020 20px,
        #800020 26px,
        #000000 26px,
        #000000 30px
      )
    `,
  },

  {
    name: "black-silver-red-maroon-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #000000 0px,
        #000000 12px,
        #C0C0C0 12px,
        #C0C0C0 16px,
        #800020 16px,
        #800020 20px,
      )
    `,
  },

  {
    name: "burgundy-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #5b1c2d 0px,
        #5b1c2d 14px,
        #b58db6 8px,
        #b58db6 8px
      )
    `,
  },

  {
    name: "black-squares",
    background: `
      repeating-linear-gradient(
        90deg,
        #000 0px,
        #000 16px,
        #1f3d4d 16px,
        #1f3d4d 32px
      )
    `,
  },

  {
    name: "multi-stripe",
    background: `
      repeating-linear-gradient(
        45deg,
        #2b5aa5 0px,
        #2b5aa5 10px,
        #000 8px,
        #000 8px,
        #d2b48c 20px,
        #d2b48c 20px,
        #7a6a58 8px,
        #7a6a58 8px
      )
    `,
  },

  {
    name: "holiday-plaid-upgraded",
    background: `
        repeating-linear-gradient(
            0deg,
            rgba(139, 0, 0, 0.6) 0px,
            rgba(139, 0, 0, 0.6) 18px,
            transparent 18px,
            transparent 24px
        ),
        repeating-linear-gradient(
            90deg,
            rgba(11, 61, 46, 0.6) 0px,
            rgba(11, 61, 46, 0.6) 18px,
            transparent 18px,
            transparent 24px
        ),
        linear-gradient(#7a1c1c, #551111)
    `,
  },

  {
    name: "classic-rich-plaid",
    background: `
        repeating-linear-gradient(
            0deg,
            rgba(120, 20, 20, 0.55) 0px,
            rgba(120, 20, 20, 0.55) 16px,
            transparent 16px,
            transparent 22px
        ),
        repeating-linear-gradient(
            90deg,
            rgba(20, 40, 90, 0.55) 0px,
            rgba(20, 40, 90, 0.55) 16px,
            transparent 16px,
            transparent 22px
        ),
        linear-gradient(#6b1f1f, #4d1414)
    `,
  },

  {
  name: "gold-plaid",
  background: `
    repeating-linear-gradient(
      0deg,
      rgba(201, 162, 77, 0.65) 0px,
      rgba(201, 162, 77, 0.65) 16px,
      transparent 16px,
      transparent 22px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(44, 44, 44, 0.6) 0px,
      rgba(44, 44, 44, 0.6) 16px,
      transparent 16px,
      transparent 22px
    ),
    linear-gradient(#c9a24d, #a88335)
  `,
  },

  {
  name: "burgundy-blue-plaid",
  background: `
    repeating-linear-gradient(
      0deg,
      rgba(92, 27, 27, 0.65) 0px,
      rgba(92, 27, 27, 0.65) 18px,
      transparent 18px,
      transparent 24px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(74, 111, 165, 0.6) 0px,
      rgba(74, 111, 165, 0.6) 18px,
      transparent 18px,
      transparent 24px
    ),
    linear-gradient(#4a2a2a, #2e1a1a)
  `,
  },

  {
    name: "red-silver-stripe",
    background: `
      repeating-linear-gradient(
        45deg,
        #8b0000 0px,
        #8b0000 14px,
        #cfcfcf 14px,
        #cfcfcf 18px
      )
    `,
  },

  {
    name: "brown-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #5a3a1a 0px,
        #5a3a1a 14px,
        #eee 8px,
        #eee 8px,
        #8ecae6 12px,
        #8ecae6 12px
      )
    `,
  },

  {
    name: "red-thick-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #8b0000 0px,
        #8b0000 24px,
        #1e3d59 8px,
        #1e3d59 8px,
        #fff 20px,
        #fff 20px
      )
    `,
  },

  {
    name: "black-multi-stripe",
    background: `
      repeating-linear-gradient(
        45deg,
        #000 0px,
        #000 8px,
        #800020 16px,
        #800020 20px,
        #777 8px,
        #777 8px,
        #2b5aa5 24px,
        #2b5aa5 28px
      )
    `,
  },


  // ==========================
    // ADDITIONAL TIE PATTERNS
    // ==========================

    {
    name: "orange-blue-textured",
    background: `
        repeating-linear-gradient(
        45deg,
        #e67e22 0px,
        #e67e22 18px,
        #1f3a5f 18px,
        #1f3a5f 24px
        )
    `,
    },

    {
    name: "mint-floral-soft",
    background: `
        radial-gradient(circle at 10px 10px,
        #c7f0e4 3px,
        transparent 4px),
        radial-gradient(circle at 20px 20px,
        #6fa8dc 3px,
        transparent 4px),
        linear-gradient(#a8e6cf, #7fd1b9)
    `,
    backgroundSize: "24px 24px",
    },

    {
    name: "navy-circles-white-center",
    background: `
        radial-gradient(circle at 12px 12px,
        white 3px,
        transparent 4px),
        radial-gradient(circle at 12px 12px,
        rgba(0,0,0,0.3) 6px,
        transparent 7px),
        linear-gradient(#1c2b44, #1c2b44)
    `,
    backgroundSize: "24px 24px",
    },

    {
    name: "navy-light-blue-dots",
    background: `
        radial-gradient(circle at 8px 8px,
        #a7c7e7 2px,
        transparent 3px),
        linear-gradient(#1c2b44, #1c2b44)
    `,
    backgroundSize: "16px 16px",
    },

    {
    name: "royal-multicolor-plaid",
    background: `
        repeating-linear-gradient(
            0deg,
            rgba(28, 63, 112, 0.65) 0px,
            rgba(28, 63, 112, 0.65) 16px,
            transparent 16px,
            transparent 22px
        ),
        repeating-linear-gradient(
            90deg,
            rgba(210, 180, 140, 0.55) 0px,
            rgba(210, 180, 140, 0.55) 16px,
            transparent 16px,
            transparent 22px
        ),
        linear-gradient(#2b3f66, #1e2b44)
        `,
    },

    {
    name: "christmas-leaves",
    background: `
        radial-gradient(circle at 10px 10px,
        #2f7d32 4px,
        transparent 5px),
        radial-gradient(circle at 18px 18px,
        white 2px,
        transparent 3px),
        linear-gradient(#8b1c1c, #6b1414)
    `,
    backgroundSize: "24px 24px",
    },

    {
    name: "pink-burgundy-diagonal",
    background: `
        repeating-linear-gradient(
        45deg,
        #e6a3b3 0px,
        #e6a3b3 14px,
        #7a1c3a 8px,
        #7a1c3a 8px,
        #b03060 20px,
        #b03060 26px
        )
    `,
    },

    {
    name: "black-green-squares",
    background: `
        repeating-linear-gradient(
        90deg,
        #000 0px,
        #000 18px,
        #1e5631 18px,
        #1e5631 22px,
        #2e86c1 22px,
        #2e86c1 26px
        )
    `,
    },

    {
    name: "grid-dots-deluxe",
    background: `
        radial-gradient(circle at 12px 12px,
        white 3px,
        transparent 4px),
        radial-gradient(circle at 12px 12px,
        rgba(255,255,255,0.25) 7px,
        transparent 8px),
        linear-gradient(#111, #111)
    `,
    backgroundSize: "24px 24px",
    },

    {
    name: "multicolor-diagonal",
    background: `
        repeating-linear-gradient(
        45deg,
        #c0392b 30px,
        #c0392b 30px,
        #f1c40f 8px,
        #f1c40f 8px,
        #2ecc71 8px,
        #2ecc71 8px,
        #34495e 18px,
        #34495e 22px
        )
    `,
    },

  // -----------------------
  // NEW COLORWAY PATTERNS (EXPANDED SET)
  // -----------------------

  {
    name: "teal-copper-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(0,128,128,0.6) 0px,
        rgba(0,128,128,0.6) 18px,
        rgba(184,115,51,0.6) 18px,
        rgba(184,115,51,0.6) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(72,61,139,0.5) 0px,
        rgba(72,61,139,0.5) 18px,
        transparent 18px,
        transparent 24px
      ),
      linear-gradient(#2f8f8f, #1f6f6f)
    `,
  },

  {
    name: "lavender-charcoal-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #e6e6fa 0px,
        #e6e6fa 22px,
        #2f2f2f 22px,
        #2f2f2f 28px
      )
    `,
  },

  {
    name: "sage-mist-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(143,188,143,0.6) 0px,
        rgba(143,188,143,0.6) 16px,
        rgba(220,220,220,0.5) 16px,
        rgba(220,220,220,0.5) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(119,136,153,0.6) 0px,
        rgba(119,136,153,0.6) 16px,
        transparent 16px,
        transparent 22px
      ),
      linear-gradient(#b6d4b6, #9fbf9f)
    `,
  },

  {
    name: "coral-steel-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #ff7f50 0px,
        #ff7f50 16px,
        #4682b4 16px,
        #4682b4 22px
      )
    `,
  },

  {
    name: "slate-cyan-dots",
    background: `
      radial-gradient(circle at 7px 7px,
        #5f9ea0 2px,
        transparent 3px),
      linear-gradient(#708090, #5a6a78)
    `,
    backgroundSize: "16px 16px, cover",
  },

  {
    name: "rust-cream-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #b7410e 0px,
        #b7410e 20px,
        #fff5e1 20px,
        #fff5e1 26px
      )
    `,
  },

  {
    name: "plum-silver-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #6a0dad 0px,
        #6a0dad 14px,
        #c0c0c0 14px,
        #c0c0c0 18px
      )
    `,
  },

  {
    name: "aqua-graphite-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(0,206,209,0.6) 0px,
        rgba(0,206,209,0.6) 16px,
        rgba(54,69,79,0.6) 16px,
        rgba(54,69,79,0.6) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(176,196,222,0.5) 0px,
        rgba(176,196,222,0.5) 16px,
        transparent 16px,
        transparent 22px
      ),
      linear-gradient(#00ced1, #20b2aa)
    `,
  },

  {
    name: "mocha-ivory-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #6f4e37 0px,
        #6f4e37 22px,
        #fffff0 22px,
        #fffff0 28px
      )
    `,
  },

  {
    name: "dusty-rose-slate-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #d8a7b1 0px,
        #d8a7b1 16px,
        #778899 16px,
        #778899 22px
      )
    `,
  },

  {
    name: "mint-charcoal-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(152,251,152,0.6) 0px,
        rgba(152,251,152,0.6) 18px,
        rgba(47,47,47,0.6) 18px,
        rgba(47,47,47,0.6) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(211,211,211,0.5) 0px,
        rgba(211,211,211,0.5) 18px,
        transparent 18px,
        transparent 24px
      ),
      linear-gradient(#98fb98, #7ccd7c)
    `,
  },

  {
    name: "peach-steel-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #ffdab9 0px,
        #ffdab9 22px,
        #4682b4 22px,
        #4682b4 28px
      )
    `,
  },

  {
    name: "ink-teal-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #2b2b2b 0px,
        #2b2b2b 14px,
        #008080 14px,
        #008080 18px
      )
    `,
  },

  {
    name: "stone-sky-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(190,190,190,0.6) 0px,
        rgba(190,190,190,0.6) 16px,
        rgba(135,206,235,0.6) 16px,
        rgba(135,206,235,0.6) 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(112,128,144,0.6) 0px,
        rgba(112,128,144,0.6) 16px,
        transparent 16px,
        transparent 22px
      ),
      linear-gradient(#d3d3d3, #b0c4de)
    `,
  },

  {
    name: "mustard-slate-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #d4a017 0px,
        #d4a017 16px,
        #708090 16px,
        #708090 22px
      )
    `,
  },

  {
    name: "cool-grey-cyan-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #a9a9a9 0px,
        #a9a9a9 20px,
        #2bcccc 20px,
        #2bcccc 26px
      )
    `,
  },

  {
    name: "smoky-lilac-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(200,162,200,0.6) 0px,
        rgba(200,162,200,0.6) 18px,
        rgba(105,105,105,0.6) 18px,
        rgba(105,105,105,0.6) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(230,230,250,0.5) 0px,
        rgba(230,230,250,0.5) 18px,
        transparent 18px,
        transparent 24px
      ),
      linear-gradient(#c8a2c8, #a678a6)
    `,
  },

  {
    name: "deep-cyan-dots",
    background: `
      radial-gradient(circle at 6px 6px,
        #00ced1 2px,
        transparent 3px),
      linear-gradient(#004f4f, #003f3f)
    `,
    backgroundSize: "14px 14px, cover",
  },

  {
    name: "bronze-graphite-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #cd7f32 0px,
        #cd7f32 22px,
        #2f4f4f 22px,
        #2f4f4f 28px
      )
    `,
  },

    // ==========================
  // FINAL ADDITIONAL TIES (35)
  // ==========================

  {
    name: "indigo-ivory-chevron",
    background: `
      repeating-linear-gradient(
        45deg,
        #2c2f6c 0px,
        #2c2f6c 14px,
        #f4f1ec 14px,
        #f4f1ec 28px
      )
    `,
  },

  {
    name: "forest-amber-herringbone",
    background: `
      linear-gradient(135deg, rgba(34,85,51,0.7) 25%, transparent 25%),
      linear-gradient(225deg, rgba(255,191,0,0.6) 25%, transparent 25%),
      linear-gradient(#1f3d2b, #162b20)
    `,
    backgroundSize: "20px 20px",
  },

  {
    name: "slate-rose-microdot",
    background: `
      radial-gradient(circle at 6px 6px, #d19aa3 2px, transparent 3px),
      linear-gradient(#4b5563, #374151)
    `,
    backgroundSize: "14px 14px, cover",
  },

  {
    name: "sand-denim-pinstripe",
    background: `
      repeating-linear-gradient(
        90deg,
        #e8dccb 0px,
        #e8dccb 18px,
        #355c7d 18px,
        #355c7d 20px
      )
    `,
  },

  {
    name: "plum-olive-offset-grid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(98,52,101,0.6) 0px,
        rgba(98,52,101,0.6) 16px,
        transparent 16px,
        transparent 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(107,142,35,0.6) 0px,
        rgba(107,142,35,0.6) 16px,
        transparent 16px,
        transparent 22px
      ),
      linear-gradient(#4b2c4f, #2f1b33)
    `,
  },

  {
    name: "cobalt-cream-ladder",
    background: `
      repeating-linear-gradient(
        0deg,
        #1e40af 0px,
        #1e40af 22px,
        #fef3c7 22px,
        #fef3c7 26px
      )
    `,
  },

  {
    name: "charcoal-mint-shadow-dot",
    background: `
      radial-gradient(circle at 8px 8px, rgba(152,251,152,0.6) 2px, transparent 4px),
      linear-gradient(#2e2e2e, #1f1f1f)
    `,
    backgroundSize: "18px 18px, cover",
  },

  {
    name: "oxblood-taupe-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #5a0f1b 0px,
        #5a0f1b 16px,
        #b8a99a 16px,
        #b8a99a 22px
      )
    `,
  },

  {
    name: "seafoam-navy-weave",
    background: `
      linear-gradient(90deg, rgba(159,226,191,0.5) 50%, transparent 50%),
      linear-gradient(0deg, rgba(28,43,68,0.5) 50%, transparent 50%),
      linear-gradient(#7fdac1, #5bbfa8)
    `,
    backgroundSize: "20px 20px",
  },

  {
    name: "burnt-orange-slate-chevron",
    background: `
      repeating-linear-gradient(
        135deg,
        #c2410c 0px,
        #c2410c 14px,
        #475569 14px,
        #475569 28px
      )
    `,
  },

  {
    name: "ink-ivory-microstripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #111827 0px,
        #111827 10px,
        #f8fafc 10px,
        #f8fafc 12px
      )
    `,
  },

  {
    name: "jade-bronze-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(0,128,96,0.6) 0px,
        rgba(0,128,96,0.6) 18px,
        rgba(205,127,50,0.6) 18px,
        rgba(205,127,50,0.6) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(47,79,79,0.5) 0px,
        rgba(47,79,79,0.5) 18px,
        transparent 18px,
        transparent 24px
      ),
      linear-gradient(#0f766e, #0a4f4a)
    `,
  },

  {
    name: "smoke-blue-diamond",
    background: `
      linear-gradient(45deg, rgba(176,196,222,0.6) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(176,196,222,0.6) 25%, transparent 25%),
      linear-gradient(#334155, #1e293b)
    `,
    backgroundSize: "20px 20px",
  },

  {
    name: "mahogany-ivory-stripe",
    background: `
      repeating-linear-gradient(
        90deg,
        #4a1c1c 0px,
        #4a1c1c 20px,
        #fffaf0 20px,
        #fffaf0 26px
      )
    `,
  },

  {
    name: "storm-lilac-dots",
    background: `
      radial-gradient(circle at 7px 7px, #d8b4fe 2px, transparent 3px),
      linear-gradient(#4c4f69, #343746)
    `,
    backgroundSize: "16px 16px, cover",
  },

  {
    name: "sunset-teal-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #fb7185 0px,
        #fb7185 16px,
        #0d9488 16px,
        #0d9488 22px
      )
    `,
  },

  {
    name: "graphite-sand-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(55,65,81,0.6) 0px,
        rgba(55,65,81,0.6) 18px,
        rgba(237,224,212,0.6) 18px,
        rgba(237,224,212,0.6) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(148,163,184,0.5) 0px,
        rgba(148,163,184,0.5) 18px,
        transparent 18px,
        transparent 24px
      ),
      linear-gradient(#374151, #1f2937)
    `,
  },

  {
    name: "cerulean-gold-pin",
    background: `
      repeating-linear-gradient(
        0deg,
        #2563eb 0px,
        #2563eb 18px,
        #facc15 18px,
        #facc15 20px
      )
    `,
  },

  {
    name: "mulberry-smoke-diagonal",
    background: `
      repeating-linear-gradient(
        135deg,
        #6d2e46 0px,
        #6d2e46 14px,
        #6b7280 14px,
        #6b7280 22px
      )
    `,
  },

  {
    name: "olive-cream-weave",
    background: `
      linear-gradient(90deg, rgba(107,142,35,0.5) 50%, transparent 50%),
      linear-gradient(0deg, rgba(255,253,208,0.5) 50%, transparent 50%),
      linear-gradient(#6b8e23, #556b2f)
    `,
    backgroundSize: "22px 22px",
  },

  {
    name: "midnight-copper-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #020617 0px,
        #020617 22px,
        #b87333 22px,
        #b87333 28px
      )
    `,
  },

  {
    name: "arctic-blue-grid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(224,242,254,0.6) 0px,
        rgba(224,242,254,0.6) 16px,
        transparent 16px,
        transparent 22px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(56,189,248,0.6) 0px,
        rgba(56,189,248,0.6) 16px,
        transparent 16px,
        transparent 22px
      ),
      linear-gradient(#0f172a, #020617)
    `,
  },

  {
    name: "terra-indigo-chevron",
    background: `
      repeating-linear-gradient(
        45deg,
        #92400e 0px,
        #92400e 14px,
        #312e81 14px,
        #312e81 28px
      )
    `,
  },

  {
    name: "linen-slate-pinstripe",
    background: `
      repeating-linear-gradient(
        90deg,
        #faf3e0 0px,
        #faf3e0 20px,
        #64748b 20px,
        #64748b 22px
      )
    `,
  },

  {
    name: "emerald-smoke-dots",
    background: `
      radial-gradient(circle at 8px 8px, #10b981 2px, transparent 3px),
      linear-gradient(#1f2933, #111827)
    `,
    backgroundSize: "18px 18px, cover",
  },

  {
    name: "amber-charcoal-diagonal",
    background: `
      repeating-linear-gradient(
        45deg,
        #f59e0b 0px,
        #f59e0b 16px,
        #2d2d2d 16px,
        #2d2d2d 22px
      )
    `,
  },

  {
    name: "foggy-lavender-plaid",
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(216,191,216,0.6) 0px,
        rgba(216,191,216,0.6) 18px,
        rgba(169,169,169,0.6) 18px,
        rgba(169,169,169,0.6) 24px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(230,230,250,0.5) 0px,
        rgba(230,230,250,0.5) 18px,
        transparent 18px,
        transparent 24px
      ),
      linear-gradient(#d8bfd8, #bfa6bf)
    `,
  },

  {
  name: "midnight-circuit",
  background: `
    repeating-linear-gradient(
      90deg,
      rgba(0, 255, 200, 0.18),
      rgba(0, 255, 200, 0.18) 1px,
      transparent 1px,
      transparent 14px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(0, 255, 200, 0.08),
      rgba(0, 255, 200, 0.08) 1px,
      transparent 1px,
      transparent 10px
    ),
    linear-gradient(180deg, #0b1020, #050814)
  `,
  backgroundSize: "auto"
  },
  
  {
  name: "frosted-prism",
  background: `
    linear-gradient(
      135deg,
      rgba(255,255,255,0.25),
      rgba(255,255,255,0.05) 40%,
      rgba(120,180,255,0.18),
      rgba(255,255,255,0.12)
    ),
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.06),
      rgba(255,255,255,0.06) 2px,
      transparent 2px,
      transparent 6px
    ),
    linear-gradient(180deg, #6b8cff, #3c4fb8)
  `,
  backgroundSize: "cover"
  },

  {
  name: "ink-ripple",
  background: `
    radial-gradient(
      circle at 30% 20%,
      rgba(255,255,255,0.15),
      transparent 40%
    ),
    radial-gradient(
      circle at 70% 60%,
      rgba(255,255,255,0.12),
      transparent 45%
    ),
    linear-gradient(180deg, #1a1a1f, #0e0e12)
  `,
  backgroundSize: "cover"
  },

  {
  name: "glacier-weave",
  background: `
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.12),
      rgba(255,255,255,0.12) 2px,
      transparent 2px,
      transparent 6px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(180,220,255,0.12),
      rgba(180,220,255,0.12) 2px,
      transparent 2px,
      transparent 6px
    ),
    linear-gradient(180deg, #5f8fa3, #2f5666)
  `,
  backgroundSize: "cover"
  },

  {
    name: "graphite-ice-stripe",
    background: `
      repeating-linear-gradient(
        0deg,
        #1f2937 0px,
        #1f2937 22px,
        #e5f0ff 22px,
        #e5f0ff 28px
      )
    `,
  },

  {
    name: "sunlit-olive-diagonal",
    background: `
      repeating-linear-gradient(
        135deg,
        #d9c46a 0px,
        #d9c46a 16px,
        #556b2f 16px,
        #556b2f 22px
      )
    `,
  },

  {
    name: "deep-sea-pin-dot",
    background: `
      radial-gradient(circle at 6px 6px, #38bdf8 2px, transparent 3px),
      linear-gradient(#082f49, #020617)
    `,
    backgroundSize: "14px 14px, cover",
  },

  {
    name: "clay-ink-stripe",
    background: `
      repeating-linear-gradient(
        90deg,
        #c26d3a 0px,
        #c26d3a 20px,
        #0f172a 20px,
        #0f172a 26px
      )
    `,
  },

];
