import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const getSemesters = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getSemesters();
  sendResponse<AcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester retrieved successfully!',
    data: result,
  });
});
const insertIntoD = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await AcademicSemesterService.insertIntoDb(data);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester created successfully!',
    data: result,
  });
});
export const AcademicSemesterController = {
  getSemesters,
  insertIntoD,
};
