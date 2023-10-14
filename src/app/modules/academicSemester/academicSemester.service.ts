import { AcademicSemester, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getSemesters = async (): Promise<AcademicSemester[]> => {
  const result = await prisma.academicSemester.findMany();
  return result;
};
const insertIntoDb = async (
  data: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({ data });
  return result;
};

export const AcademicSemesterService = {
  getSemesters,
  insertIntoDb,
};
