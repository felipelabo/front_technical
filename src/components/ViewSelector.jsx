import { memo } from "react";
import { MdOutlineGridView, MdOutlineMap} from "react-icons/md";

const ViewSelector = memo(function VewSelector({ handleViewChange, viewMode , variable}){

    return (
        <div className="flex gap-2">
            <button
                onClick={() => handleViewChange(variable.GRID)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    viewMode === variable.GRID
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-pressed={viewMode === variable.GRID}
            >
                <MdOutlineGridView />
            </button>
            <button
                onClick={() => handleViewChange(variable.MAP)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    viewMode === variable.MAP
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-pressed={viewMode === variable.MAP}
            >
                <MdOutlineMap />
            </button>
        </div>
    );
});

export default ViewSelector;