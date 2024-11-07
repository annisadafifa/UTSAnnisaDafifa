import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function RowPekerjaan(props: { tahunbekerja: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; instansi: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; bekerjasebagai: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }){
    return(
      <div className="border-2 border-grey-500/75 rounded-lg bg-red-300 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3 p-2">{props.tahunbekerja}</div>
          <div className="col-span-12 md:col-span-6 p-2">{props.instansi}</div>
          <div className="col-span-12 md:col-span-3 p-2">{props.bekerjasebagai}</div>
        </div>
      </div>
    </div>
    )
  }
