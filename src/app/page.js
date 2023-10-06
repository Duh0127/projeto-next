import Link from "next/link";
import React from "react";

export default function page(){
  return(
    <>
      <h1>Página Inicial</h1>

      <div>
        <ul>
          <li><Link href="/produtos">PRODUTOS</Link></li>
        </ul>
      </div>
    </>
  )
}