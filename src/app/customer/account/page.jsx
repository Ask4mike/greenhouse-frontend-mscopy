"use client";
import { useGetUserStore } from "@/zustand/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";

export default function Page() {
  const { user } = useGetUserStore();

  // console.log(user);

  return (
    <section className="flex flex-col gap-10 ">
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="w-1/3 lg:max-w-[363px] min-w-[300px] max-lg:w-full h-[224px] rounded-lg bg-white p-6 flex flex-col items-center justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full">
            <Image
              height={500}
              width={500}
              src="/images/img2.png"
              alt="user image"
              className="object-cover h-full w-full object-center"
            />
          </div>
          <h2 className="font-medium mt-4 mb-2">
            {user?.profile?.first_name + " " + user?.profile?.last_name}
          </h2>
          <div className="text-xs">
            <Link href="#">View Profile</Link>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-6 max-sm:w-full min-w-[300px]">
          <div className="flex justify-between border-b border-b-[#B1B2B2] pb-3">
            <h2 className="font-medium">BILLING ADDRESS</h2>
            <MdOutlineEdit size={26} />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <h3>
              {user?.profile?.first_name + " " + user?.profile?.last_name}
            </h3>
            <p>
             Please write your address here
            </p>
            <p>{user?.email}</p>
            <p>{user?.profile?.phone_number}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden border-2">
        <div className="flex justify-between items-center p-4">
          <h3 className="font-bold">Recent Order History</h3>
          <div>
            <Link
              href="/customer/orderHistory"
              className="hover:text-forest-green-500"
            >
              See all
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left bg-[#F9FAFB] font-medium text-sm">
                <th className="">Order Id</th>
                <th className="">Date</th>
                <th className="">Price</th>
                <th className="">Status</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-6 ">
                <td className="">1sacacacs</td>
                <td className="">2</td>
                <td className="">3</td>
                <td className="">
                  <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                    Shipped
                  </span>
                </td>
                <td className="">Actions</td>
              </tr>
              <tr className="py-6 ">
                <td className="">1sacacacs</td>
                <td className="">2</td>
                <td className="">3</td>
                <td className="">
                  <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                    Shipped
                  </span>
                </td>
                <td className="">Actions</td>
              </tr>
              <tr className="py-6 ">
                <td className="">1sacacacs</td>
                <td className="">2</td>
                <td className="">3</td>
                <td className="">
                  <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                    Shipped
                  </span>
                </td>
                <td className="">Actions</td>
              </tr>
              <tr className="py-6 ">
                <td className="">1sacacacs</td>
                <td className="">2</td>
                <td className="">3</td>
                <td className="">
                  <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                    Shipped
                  </span>
                </td>
                <td className="">Actions</td>
              </tr>
              <tr className="py-6 ">
                <td className="">1sacacacs</td>
                <td className="">2</td>
                <td className="">3</td>
                <td className="">
                  <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                    Shipped
                  </span>
                </td>
                <td className="">Actions</td>
              </tr>
              <tr className="py-6 ">
                <td className="">1sacacacs</td>
                <td className="">2</td>
                <td className="">3</td>
                <td className="">
                  <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                    Shipped
                  </span>
                </td>
                <td className="">Actions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
