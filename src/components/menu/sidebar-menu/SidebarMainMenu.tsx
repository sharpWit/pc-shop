// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet/Sheet";
// import { ChevronsRightLeft } from "lucide-react";
// import { FC, useEffect } from "react";

// interface Props {
//   isOpen: boolean;
//   openSheet: () => void;
// }

// const SidebarMainMenu: FC<Props> = ({ isOpen, openSheet }) => {
//   return (
//     <Sheet modal={isOpen} onOpenChange={openSheet}>
//       <SheetTrigger>
//         <ChevronsRightLeft className="text-primary-foreground" />
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Edit profile</SheetTitle>
//           <SheetDescription>
//             Make changes to your profile here. Click save when you're done.
//           </SheetDescription>
//         </SheetHeader>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="submit">Save changes</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// };
// export default SidebarMainMenu;
