import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterZodValidation } from './academicSemester.validation';

const router = express.Router();
router.post('/create-semester', AcademicSemesterController.insertIntoD);
router.get(
  '/',
  validateRequest(AcademicSemesterZodValidation.create),
  AcademicSemesterController.getSemesters
);

export const AcademicSemesterRoutes = router;
