import winston from 'winston';

export default {
  log: (text: string) => winston.info(text)
}