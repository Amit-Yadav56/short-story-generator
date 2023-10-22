import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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"
});

export const openfun=async(value)=>{
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-2",
    messages: [{"role": "user", "content": `Create short story about ${value}`}],
    max_tokens:20
  });
  return (chatCompletion.choices[0]?.message?.content);
}
openfun();
function req(){
  const val=document.getElementById('prom').value;
  document.querySelector('.Story').innerHTML=openfun(val);
}
