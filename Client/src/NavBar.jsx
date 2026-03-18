import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NativeSelect from "@mui/material/NativeSelect";

export default function NavBar() {
  return (
    <div className="my-1 w-full px-4 flex justify-center">
      <div
        className="
          w-full max-w-[500px]
          h-14 md:h-16
          border shadow-xl
          rounded-full
          hover:bg-gray-100
          transition
        "
      >
        <div className="relative h-full flex items-center px-4 gap-3">
          
          {/* Mobile dropdown */}
          <div className="block  ">
            <NativeSelect
              defaultValue="place"
              className="text-sm bg-transparent"
              inputProps={{ name: "search" }}
            >
              <option value="place">Place</option>
              <option value="country">Country</option>
            </NativeSelect>
          </div>

          {/* Search form */}
          <form className="flex items-center flex-1 gap-2">
            <input
              type="text"
              placeholder="Enter place"
              className="
                flex-1
                border-none outline-none
                bg-transparent
                text-sm md:text-base
              "
            />

            <button
              type="submit"
              className="group relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center"
            >
              <span
                className="
                  absolute inset-0
                  rounded-full bg-red-500
                  opacity-0 scale-75
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="
                  relative
                  text-gray-700
                  text-base md:text-lg
                  transition-all duration-300
                  group-hover:text-white
                  group-hover:scale-125
                "
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
