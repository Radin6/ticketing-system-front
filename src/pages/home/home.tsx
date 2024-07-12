import HomeLayout from "@/components/Layout/HomeLayout";
import Button from "@/components/Button";
import TicketsTable from "./_components/TicketsTable";
import Loading from "@/components/Loading";
import TicketStats from "./_components/TicketStats";
import useHomeLogic from "./useHomeLogic";
import Dropdown from "@/components/Dropdown";
import Modal from '@/components/Modal';
import { TPriority, TStatus } from '@/types/ticketTypes';
import Input from '@/components/Input';
import ModalTicketExpanded from "./_components/ModalTicketExpanded";
import { useDoSort } from "@/store/useDoSort";
import { SORT_OPTIONS } from "@/constants/tickets";

//import ModalsAll from "./_components/AllModals";
//import { TicketsMocks } from "../../mocks/TicketsMocks";

function Home() {
  const {
    tickets,
    isLoading,
    isEditing,
    showModal,
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    status,
    setStatus,
    ticketExpanded,
    setTicketExpanded,
    handleOpenModal,
    handleClickEditTicket,
    handleDeleteTicket,
    handleEditTicket,
    handleOnClose,
    handleCreateTicket,
    handleSort
  } = useHomeLogic();
  const{ doSort } = useDoSort();

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col p-6 m-4 max-w-full">
          <div className="my-4">
            <div className="flex justify-between items-end my-4">
              <TicketStats total={tickets.length} />
              <Dropdown options={SORT_OPTIONS}>
                Sort By
              </Dropdown>
            </div>
            {/*Modal showing Ticket Expanded Datails*/}
            {ticketExpanded &&
              <ModalTicketExpanded
                ticketExpanded={ticketExpanded}
                onClose={() => setTicketExpanded(null)} />
            }
            {/*Modal for Edit or Create a New Ticket*/}
            {showModal &&
              <Modal onClose={handleOnClose}>
                <form className="flex flex-col my-2" onSubmit={isEditing ? handleEditTicket : handleCreateTicket}>
                  <label htmlFor="title" className="py-1">
                    Title
                  </label>
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    id="title"
                    required
                  />
                  <label htmlFor="description" className="py-1">
                    Description
                  </label>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    id="description"
                    className="border px-2 py-1 rounded-md bg-slate-100"
                    required
                  />
                  <label htmlFor="priority" className="py-1">
                    Priority
                  </label>
                  <select
                    onChange={(e) => setPriority(e.target.value as TPriority)}
                    value={priority}
                    id="priority"
                    className="border px-2 py-1 rounded-md bg-slate-100"
                    required
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  {isEditing && <>
                    <label htmlFor="status" className="py-1">
                      Status
                    </label>
                    <select
                      onChange={(e) => setStatus(e.target.value as TStatus)}
                      value={status}
                      id="status"
                      className="border px-2 py-1 rounded-md bg-slate-100"
                      required
                    >
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                      <option value="in-progress">In-Progress</option>
                    </select>
                  </>}
                  <Button type="submit" className="mt-6 mx-auto" disabled={isLoading}>
                    {isLoading ? <Loading /> : (isEditing ? "Update Ticket" : "Create Ticket")}
                  </Button>
                </form>
              </Modal>
            }
            {tickets?.length
              ? <TicketsTable
                tickets={doSort ? handleSort(tickets) : tickets}
                handleDeleteTicket={handleDeleteTicket}
                handleClickEditTicket={handleClickEditTicket}
                setTicketExpanded={setTicketExpanded}
              />
              : <Loading className="w-[300px] h-[150px]" />
            }
          </div>
          <Button onClick={handleOpenModal} variant="green">
            Create New Ticket
          </Button>
        </div>
      </div>
    </HomeLayout>

  )
}

export default Home;