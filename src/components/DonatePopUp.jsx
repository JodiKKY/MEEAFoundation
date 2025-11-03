import React, { useState } from "react";
import { motion } from "framer-motion";

const DonatePopup = ({ onClose }) => {
  const [method, setMethod] = useState("bank");

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center text-pink-400 mb-4">
          Donate to MEEA Foundation
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setMethod("bank")}
            className={`px-4 py-2 rounded-full ${
              method === "bank"
                ? "bg-pink-300 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Bank
          </button>
          <button
            onClick={() => setMethod("momo")}
            className={`px-4 py-2 rounded-full ${
              method === "momo"
                ? "bg-pink-300 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            MoMo
          </button>
        </div>

        {/* Details */}
        {method === "bank" ? (
          <div className="text-center space-y-2">
            <p className="font-semibold text-gray-700">Bank Name: Ecobank</p>
            <p className="font-semibold text-gray-700">
              Account Number: **********
            </p>
            <p className="text-gray-500">Account Name: MEEA Foundation</p>
            <p className="text-gray-400 text-sm">Ref: MEEA</p>
          </div>
        ) : (
          <div className="text-center space-y-2">
            <p className="font-semibold text-gray-700"> 0598141926 - Jodi Kwesi Kwakye Yirenkyi</p>
            <p className="font-semibold text-gray-700"> 0244806110 - Mabelle Yirenkyi</p>
            <p className="text-gray-500">Reference: MEEA</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DonatePopup;
