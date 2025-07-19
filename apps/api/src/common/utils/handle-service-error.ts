import { Logger } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

export function handleServiceError(context: string, error: unknown, logger: Logger, customMessage?: string) {
  const err = error as Error;
  logger.error(`[${context}] ${customMessage ?? 'Erro inesperado'}: ${err.message}`, err.stack);
  throw new InternalServerErrorException(customMessage ?? 'Erro inesperado');
}
