import React from 'react'

const WelcomeScreen = () => {
    const sendMessage = async () => {
    console.log("Message sent")
  }
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="py-4 px-4 bg-[#1f1f1f] rounded-sm">
        <div className="max-w-2xl w-full bg-[#2a2a2a] rounded-xl p-6 sm:p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f1f1f]">
              <span className="text-green-500 text-2xl">◎</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            How can I help you today?
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mb-8 px-2 sm:px-0">
            This code will display a prompt asking the user for their name, and
            then it will display a greeting message with the name entered by the
            user.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#1f1f1f] rounded-lg p-4 text-left hover:bg-[#252525] transition">
              <div className="text-green-500 mb-2">🔖</div>
              <h3 className="text-white font-medium text-sm">
                Saved Prompt Templates
              </h3>
              <p className="text-gray-400 text-xs">
                Users save and reuse prompt templates for faster responses.
              </p>
            </div>

            <div className="bg-[#1f1f1f] rounded-lg p-4 text-left hover:bg-[#252525] transition">
              <div className="text-green-500 mb-2">🖼️</div>
              <h3 className="text-white font-medium text-sm">
                Media Type Selection
              </h3>
              <p className="text-gray-400 text-xs">
                Users select media type for tailored interactions.
              </p>
            </div>

            <div className="bg-[#1f1f1f] rounded-lg p-4 text-left hover:bg-[#252525] transition">
              <div className="text-green-500 mb-2">🌐</div>
              <h3 className="text-white font-medium text-sm">
                Multilingual Support
              </h3>
              <p className="text-gray-400 text-xs">
                Choose language for better interaction.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
            {["All", "Text", "Image", "Video", "Music", "Analytics"].map(
              (tab, idx) => (
                <button
                  key={idx}
                  className={`${
                    idx === 0 ? "text-green-500" : "text-gray-400"
                  } hover:text-green-500 transition`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Input box */}
          <div className="flex items-center bg-[#1f1f1f] rounded-xl px-3 sm:px-4 py-2">
            <span className="text-green-500 text-xl mr-2">◎</span>
            {/* replace with your logo */}
            <input
              type="text"
              placeholder="Type your prompt here..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
            />
            <button className="bg-green-500 rounded-lg p-2 sm:p-3 ml-2 hover:bg-green-600 transition" onClick={sendMessage}>
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen