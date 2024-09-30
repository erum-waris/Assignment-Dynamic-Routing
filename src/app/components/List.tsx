import Link from "next/link";
import React from "react";
import { LinksListProps } from "../../../types/Types";

function List(props: LinksListProps) {
    return (
      <div>
          <Link href={props.href}> {props.listname} </Link>
      </div>
    )
  }
  
  
  export default List