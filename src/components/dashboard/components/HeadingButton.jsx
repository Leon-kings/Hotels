import { Message, Person, ShoppingCart, Subscript } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";


export default function HeadingButton() {
  return (
    <>
      <div className="w-full">
        <div className="rounded-xs">
          <div class="grid h-36 bg-gray-300 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 place-items-center gap-4 ...">
            <div className="bg-amber-50">
              {" "}
              <Button>
                <ShoppingCart />{" "}
              </Button>
            </div>
            <div className="bg-amber-50">
              {" "}
              <Button>
                <ShoppingCart />{" "}
              </Button>
            </div>
            <div className="bg-amber-50">
              {" "}
              <Button>
                <Message />{" "}
              </Button>
            </div>
            <div className="bg-amber-50">
              {" "}
              <Button>
                <Subscript />{" "}
              </Button>
            </div>
          </div>
          {/* heading */}
        </div>
      </div>
    </>
  );
}
