function TicketStats({ total } : {total: number}) {
  return (
    <div className="w-full my-4">
      <div>
        <div className="p-2 border border-black rounded-lg h-16 w-28 bg-blue-50">
          <p className="text-center">Total tickets</p>
          <p className="font-bold text-xl text-center w-full">{total}</p>
        </div>
      </div>
    </div>
  )
}

export default TicketStats;