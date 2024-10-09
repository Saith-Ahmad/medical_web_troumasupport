import { motion } from "framer-motion";
function Table() {
    return (
      <motion.div
      initial={{ opacity: 0, x: 123 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0 }}
            viewport={{ once: true }}
      className="w-full lg:min-w-[700px] bg-white p-3 md:p-5 my-10 rounded-xl py-10">
        <p className="para-large font-semibold">Availability</p>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse ">
              <thead>
                <tr>
                  <th className="p-3 text-white"></th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3 rounded-s-lg">Mon</th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3">Tue</th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3">Wed</th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3">Thu</th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3">Fri</th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3">Sat</th>
                  <th className="bg-[#3A3A3C] font-medium text-white p-3 rounded-e-lg">Sun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-[#3A3A3C] text-white p-3 rounded-t-lg">
                    Morning
                  </td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                </tr>
                <tr>
                  <td className="bg-[#3A3A3C] text-white p-3">Afternoon</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                </tr>
                <tr>
                  <td className="bg-[#3A3A3C] text-white p-3">Evening</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                </tr>
                <tr>
                  <td className="bg-[#3A3A3C] text-white p-3 rounded-b-lg">
                    Night
                  </td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3 text-green-500">✓</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
    
    );
  }
  
  export default Table;
  