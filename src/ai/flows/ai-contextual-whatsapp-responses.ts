'use server';
/**
 * @fileOverview This file implements a Genkit flow for AI-powered contextual WhatsApp responses.
 *
 * - aiContextualWhatsappResponses - A function that generates an AI response based on a customer query and business context.
 * - AiContextualWhatsappResponsesInput - The input type for the aiContextualWhatsappResponses function.
 * - AiContextualWhatsappResponsesOutput - The return type for the aiContextualWhatsappResponses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContextualWhatsappResponsesInputSchema = z.object({
  customerQuery: z.string().describe('The customer\'s inquiry received via WhatsApp.'),
  businessContext: z
    .string()
    .describe('Structured business context (metadata) in JSON string format, used to inform the AI\'s response.'),
});
export type AiContextualWhatsappResponsesInput = z.infer<typeof AiContextualWhatsappResponsesInputSchema>;

const AiContextualWhatsappResponsesOutputSchema = z.object({
  aiResponse: z.string().describe('The AI\'s generated answer to the customer\'s query.'),
});
export type AiContextualWhatsappResponsesOutput = z.infer<typeof AiContextualWhatsappResponsesOutputSchema>;

export async function aiContextualWhatsappResponses(
  input: AiContextualWhatsappResponsesInput
): Promise<AiContextualWhatsappResponsesOutput> {
  return aiContextualWhatsappResponsesFlow(input);
}

const contextualWhatsappResponsePrompt = ai.definePrompt({
  name: 'contextualWhatsappResponsePrompt',
  input: {schema: AiContextualWhatsappResponsesInputSchema},
  output: {schema: AiContextualWhatsappResponsesOutputSchema},
  prompt: `You are an AI assistant for OPSIX's Magic Contact platform, designed to provide accurate, context-specific, and efficient responses to customer inquiries on WhatsApp.

Your primary role is to act as a decision-making tool: utilize the provided structured business context (metadata) to answer the customer's question instantly.

If the provided business context contains sufficient information, generate a precise and helpful response. If the context does not contain enough information to answer the question, state clearly and politely that you cannot answer based on the provided information and suggest that the customer contact a human advisor for further assistance.

Customer Query: {{{customerQuery}}}

Business Context (JSON):
{{{businessContext}}}

Your Response:`,
});

const aiContextualWhatsappResponsesFlow = ai.defineFlow(
  {
    name: 'aiContextualWhatsappResponsesFlow',
    inputSchema: AiContextualWhatsappResponsesInputSchema,
    outputSchema: AiContextualWhatsappResponsesOutputSchema,
  },
  async input => {
    const {output} = await contextualWhatsappResponsePrompt(input);
    return output!;
  }
);
