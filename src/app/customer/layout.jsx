"use client";
import SideBar from "@/components/customer/SideBar";
import { useCustomerSidebarStore, useGetUserStore } from "@/zustand/stores";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import AuthProvider from "../(auth)/AuthProvider";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { isOpen, openNavbar, closeNavbar, toggleNavbar } =
    useCustomerSidebarStore();
  const router = useRouter();
  const { user } = useGetUserStore();

  const handleOpen = () => {
    toggleNavbar();
  };

  // useEffect(() => {
  //   if(!user.profile){
  //     router.replace('/signin')
  //   }
  // });

  return (
    <AuthProvider>
      <div className="pt-36 max-md:pt-40 max-lg:pt-[220px] ">
        {/* <div className="max-w-[1535px] mx-auto mb-2 bg-grey-500 px-4 lg:hidden fixed md:top-48 left-0 right-0">
        {!isOpen ? (
          <IoMenuOutline className="" size={28} onClick={handleOpen} />
        ) : (
          <IoCloseOutline className="" size={28} onClick={handleOpen} />
        )}
      </div> */}
        <div className="flex max-w-[1535px] mx-auto gap-10 px-4">
          <SideBar />
          <div className="w-full max-sm:pt-10">{children}</div>
        </div>
      </div>
    </AuthProvider>
  );
}
