import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import SYSTEM_MESSAGE from "@/constants/system-message";
import { taskTools } from '@/ai/tools';
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: SYSTEM_MESSAGE,
    messages, 
    maxTokens :15,
    tools : taskTools,
    maxSteps : 5,
    toolChoice : "auto",
    temperature : 0.3,
  });

  return result.toDataStreamResponse();
}