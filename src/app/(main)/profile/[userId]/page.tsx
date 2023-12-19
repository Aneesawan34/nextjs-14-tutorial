import type { Metadata } from "next";

type Props = {
  params: {
    userId: string;
  };
};

// static meta data
// export const metadata: Metadata = {
//   title: "profile id",
// };

// static meta data with reference of parent metadata
export const metadata: Metadata = {
  // title: {
  //   absolute: "profile id with absolute", // it will ignore parent meta data and produce absolute value
  // },
  title: "profile id", // if parent template use then it will concatinate with that value and replace with %s
};

// dynamic meta data
// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`profile id ${params.userId}`);
//     }, 1000);
//   });
//   return {
//     title: `${title}`,
//   };
// };

export default function UserId({ params }: Props) {
  return <h1>Users Page of {params.userId}</h1>;
}
