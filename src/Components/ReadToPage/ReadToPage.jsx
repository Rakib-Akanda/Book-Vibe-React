import { useContext } from "react";
import { BooksDataContext } from "../MainLayout/MainLayout";
import { getBooks } from "../../Utility/Utility";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReadToPage = () => {
  const books = useContext(BooksDataContext);
  const readBooksId = getBooks();
  const filteredForReadBooks = books.filter((book) =>
    readBooksId.includes(book.bookId)
  );
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="px-2 lg:px-0 lg:mb-0 mb-10">
      <div className="bg-[#13131308] lg:px-8 py-4 lg:py-8 mt-7 px-2 rounded-3xl">
        <ResponsiveContainer width="100%" height={523}>
          <BarChart width={1050} height={523} data={filteredForReadBooks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip></Tooltip>
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {filteredForReadBooks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default ReadToPage;
