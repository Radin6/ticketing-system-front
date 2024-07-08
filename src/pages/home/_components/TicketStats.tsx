function TicketStats({ total } : {total: number}) {
  return (
    <div className="w-full my-4">
      <div>
        <div className="p-2 border border-black rounded-lg h-16 w-28 bg-blue-50">
          <p>Total tickets</p>
          <span className="font-bold text-xl text-center">{total}</span>
        </div>
      </div>
    </div>
  )
}

export default TicketStats;