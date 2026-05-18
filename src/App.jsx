import React, { useState } from 'react'

export default function AIRizzCloneApp() {
  const [conversation, setConversation] = useState('')
  const [selectedTone, setSelectedTone] = useState('Funny 😂')
  const [generatedReplies, setGeneratedReplies] = useState([])
  const [profileBio, setProfileBio] = useState('')
  const [generatedOpener, setGeneratedOpener] = useState('')
  const [interests, setInterests] = useState('')
  const [generatedBio, setGeneratedBio] = useState('')

  const tones = [
    'Funny 😂',
    'Flirty 😏',
    'Confident 😎',
    'Direct 💬',
    'Sweet ❤️',
    'Chaotic 🔥',
    'Dry Humor 🗿',
    'Romantic 🌙'
  ]

  const bioStyles = [
    'Funny',
    'Mysterious',
    'Confident',
    'Minimal',
    'Nerdy',
    'Chaotic Gen Z'
  ]

  const generateReplies = () => {
    if (!conversation.trim()) return

    const mockReplies = {
      'Funny 😂': [
        'Nah because that would actually be hilarious 😭',
        'Okay but now I NEED the full story.',
        'You sound like trouble already 😂'
      ],
      'Flirty 😏': [
        'You’re dangerously easy to talk to 😏',
        'At this point I’m blaming you for my smile.',
        'Lowkey enjoying this conversation too much.'
      ],
      'Confident 😎': [
        'I knew this conversation would be interesting.',
        'You’ve got good energy honestly.',
        'Yeah we’d probably vibe pretty well.'
      ],
      'Direct 💬': [
        'You seem cool. Wanna keep talking?',
        'I like your vibe honestly.',
        'We should continue this sometime.'
      ]
    }

    setGeneratedReplies(
      mockReplies[selectedTone] || [
        'That actually sounds interesting 👀',
        'You’ve got my attention now.',
        'Okay wait I kinda like this energy.'
      ]
    )
  }

  const generateOpener = () => {
    if (!profileBio.trim()) return

    setGeneratedOpener(
      'Important question: what’s your perfect late-night drive playlist?'
    )
  }

  const generateBio = () => {
    if (!interests.trim()) return

    setGeneratedBio(
      'Probably overthinking texts while listening to music and pretending I have my life together.'
    )
  }

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Copied to clipboard!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              RIZZ AI
            </h1>

            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              AI-powered texting assistant for modern conversations.
            </p>
          </div>

          <button className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
            Upgrade Pro
          </button>
        </header>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800 shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">
              Paste Conversation
            </h2>

            <textarea
              value={conversation}
              onChange={(e) => setConversation(e.target.value)}
              placeholder="Paste your conversation here..."
              className="w-full h-64 sm:h-72 bg-black border border-zinc-700 rounded-2xl p-4 outline-none resize-none focus:border-purple-500 transition-all"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              {tones.map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-xl py-3 text-sm transition-all duration-300 ${
                    selectedTone === tone
                      ? 'bg-purple-600'
                      : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={generateReplies}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
              >
                Generate Replies
              </button>

              <button className="bg-zinc-800 px-6 py-4 rounded-2xl hover:bg-zinc-700 transition-all duration-300">
                OCR Upload
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">AI Replies</h2>

              <button
                onClick={generateReplies}
                className="text-sm bg-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-700 transition-all"
              >
                Regenerate
              </button>
            </div>

            <div className="space-y-4">
              {generatedReplies.length === 0 ? (
                <div className="bg-black border border-dashed border-zinc-700 rounded-2xl p-8 text-center text-zinc-500">
                  Your generated replies will appear here.
                </div>
              ) : (
                generatedReplies.map((reply, index) => (
                  <div
                    key={index}
                    className="bg-black border border-zinc-800 rounded-2xl p-5 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-base sm:text-lg leading-relaxed">
                        {reply}
                      </p>

                      <button
                        onClick={() => copyText(reply)}
                        className="bg-purple-600 px-4 py-2 rounded-xl text-sm hover:bg-purple-500 transition-all"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-5">
              AI Opener Generator
            </h2>

            <textarea
              value={profileBio}
              onChange={(e) => setProfileBio(e.target.value)}
              placeholder="Paste dating profile bio here..."
              className="w-full h-40 bg-black border border-zinc-700 rounded-2xl p-4 outline-none resize-none focus:border-blue-500"
            />

            <button
              onClick={generateOpener}
              className="w-full mt-5 bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >
              Generate Openers
            </button>

            {generatedOpener && (
              <div className="mt-6 bg-black border border-zinc-800 rounded-2xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-lg">{generatedOpener}</p>

                  <button
                    onClick={() => copyText(generatedOpener)}
                    className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-5">AI Bio Writer</h2>

            <input
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Enter your interests..."
              className="w-full bg-black border border-zinc-700 rounded-2xl p-4 outline-none focus:border-pink-500"
            />

            <div className="grid grid-cols-2 gap-3 mt-5">
              {bioStyles.map((style) => (
                <button
                  key={style}
                  className="bg-zinc-800 hover:bg-pink-600 rounded-xl py-3 transition-all duration-300 text-sm"
                >
                  {style}
                </button>
              ))}
            </div>

            <button
              onClick={generateBio}
              className="w-full mt-5 bg-gradient-to-r from-pink-500 to-orange-500 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >
              Generate Bio
            </button>

            {generatedBio && (
              <div className="mt-6 bg-black border border-zinc-800 rounded-2xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-lg">{generatedBio}</p>

                  <button
                    onClick={() => copyText(generatedBio)}
                    className="bg-pink-600 px-4 py-2 rounded-xl hover:bg-pink-500"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 rounded-3xl p-5 sm:p-6 border border-zinc-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">Trending Replies</h2>

            <button className="bg-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-700 transition-all">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'If being cute was illegal you’d be serving life 😭',
              'You flirt like you already know I’m obsessed.',
              'This conversation has potential ngl.'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-5 hover:border-pink-500 transition-all duration-300"
              >
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-14 text-center text-zinc-500 text-sm pb-6">
          Built for the next generation of AI social apps.
        </footer>
      </div>
    </div>
  )
}
