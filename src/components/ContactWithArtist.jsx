export function ContactWithArtist() {
  return (
    <div className="mt-20">
      <h3 className="font-bold text-3xl text-blue-200 mb-4">Get in touch</h3>
      <form action="">
        <input type="text" placeholder="Name" className="input-form mb-3" />
        <input type="text" placeholder="Email" className="input-form mb-3" />
        <textarea
          placeholder="How Can I Help?"
          className="input-form relative h-40 resize-none"
          maxLength={150}
        />
        <button className=" bg-blue-200 px-3 w-40 py-2 rounded-md inline-block hover:bg-blue-400 hover:cursor-pointer text-zinc-950 font-bold text-center">
          {"submit"}
        </button>
      </form>
    </div>
  );
}
