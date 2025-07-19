import { PrismaService } from 'src/prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export const mockPrismaService = mockDeep<PrismaService>() as DeepMockProxy<PrismaService>;
