import { assets } from "@/Assets/assets"
import Image from "next/image"

const BlogTableItem = ({authorImg, title, author, date, mongoId, deleteBlog}) => {

    const blogDate = new Date(date)

  return (
    <tr className="bg-white border-b">
        <th scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <Image src={authorImg ? authorImg : assets.profile_icon} alt="profile" width={40} height={40} />
            <p>{author ? author : "No author"}</p>
        </th>
        <td className="px-6 py-4">
            {title ? title : "no title" }
        </td>
        <td className="px-6 py-4">
            {blogDate.toDateString()}
        </td>
        <td className="px-6 py-4 cursor-pointer" onClick={() => deleteBlog(mongoId)}>
            X
        </td>
    </tr>
  )
}

export default BlogTableItem