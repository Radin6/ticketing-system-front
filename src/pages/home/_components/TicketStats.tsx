function TicketStats({ total }: { total: number }) {
  return (
    <div className="w-full">
      <div className="p-2 border border-gray-300 rounded-lg h-16 w-28 bg-green-50">
        <p className="text-center">Total tickets</p>
        <p className="font-bold text-xl text-center w-full">{total}</p>
      </div>
    </div>
  )
}

export default TicketStats;