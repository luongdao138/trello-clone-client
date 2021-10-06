import { Member } from './../features/board/boardModel';
const checkMember = (mems: Member[], userId: string): boolean => {
  return mems?.some((m) => m.user._id === userId);
};

export default checkMember;
