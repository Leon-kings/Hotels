/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { teamMembers } from "../../assets/data/data";

export const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="w-full py-20 mt-4 mb-2 rounded-2xl bg-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-center text-white text-primary font-normal">
              Team Members
            </p>
            <h2 className="mb-12 text-white text-4xl font-bold">
              Our Master Team
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl pb-4 bg-white gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: member.delay }}
            >
              <div className="text-center rounded-lg overflow-hidden">
                <div
                  className="rounded-full overflow-hidden mx-auto my-6 w-40 h-40 cursor-pointer"
                  onClick={() => openModal(member)}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="mb-1 text-black text-xl font-bold">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
                <div className="flex justify-center mt-4 space-x-2">
                  <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
                    <Facebook fontSize="small" />
                  </button>
                  <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
                    <Twitter fontSize="small" />
                  </button>
                  <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
                    <Instagram fontSize="small" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl text-black font-bold">
                  {selectedMember.name}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-red-500 dark:text-red-500"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <img
                    src={selectedMember.image}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="w-full md:w-2/3 text-black">
                  <p className="text-lg text-black font-semibold mb-2">
                    {selectedMember.position}
                  </p>
                  {selectedMember.bio && (
                    <p className="mb-4">{selectedMember.bio}</p>
                  )}

                  <div className="flex space-x-2 mt-6">
                    <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
                      <Facebook fontSize="small" />
                    </button>
                    <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
                      <Twitter fontSize="small" />
                    </button>
                    <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
                      <Instagram fontSize="small" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
