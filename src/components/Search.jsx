import { redirect } from 'next/navigation'

export default function Search ({ search, setSearch, input, setInput, data }) {

  const submit = (e) => {
    e.preventDefault();

    setSearch(input)
    setInput("")
  }

  return (
    <div className="
 flex
 flex-row
 inline-block
"> <form onSubmit={submit}>
      <input type="text"
        className="
        h-10
        w-650
        border-1.5
        border-slate-800
        rounded
        outline-none
        pl-2 
        pr-[70px]
        pb-[1px]
       "
       value={input}
       onChange={(e) => setInput(e.target.value)}
      />
      <div className="
       flex 
       flex-row
       justify-end
      ">
      <button className="
       text-md
       hover:bg-[#09475d]
       rounded
       h-8
       w-16
       font-semibold
       block
       mt-[-36px]
       mr-1
       transition-colors
       duration-500
       ease-in-out"
       onClick={submit}
       type='submit'
      >Search</button></div></form>
   </div>
  )
}
