const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function GeminiAi(text, base64Image, toStringImage) {
  let contents;
  if (base64Image && toStringImage && text) {
    contents = [
      {
        inlineData: {
          mimeType: toStringImage,
          data: base64Image,
        },
      },
      { text: text },
    ];
  } else if (base64Image && toStringImage) {
    contents = [
      {
        inlineData: {
          mimeType: toStringImage,
          data: base64Image,
        },
      },
    ];
  } else {
    contents = [{ text: text }];
  }
  //   const contents = [
  //     {
  //       inlineData: {
  //         mimeType: toStringImage,
  //         data: base64Image,
  //       },
  //     },
  //     { text: text},
  //   ];

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: contents,
  });

  return response.text;
}

module.exports = GeminiAi;
