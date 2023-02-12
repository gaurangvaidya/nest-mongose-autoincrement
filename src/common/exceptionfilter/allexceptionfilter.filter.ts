import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { sentError } from 'src/utility/responseFunctions';
import { ExceptionResponse } from '../types';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let commonResponse = null;
    console.log(exception);
    if (exception instanceof HttpException) {
      const exceptionResponse = <ExceptionResponse>exception.getResponse();
      commonResponse = sentError(
        exceptionResponse.error,
        exceptionResponse.message,
        exceptionResponse.statusCode,
      );
    } else {
      commonResponse = sentError();
    }
    response.status(commonResponse.status).json(commonResponse);
  }
}
