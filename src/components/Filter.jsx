import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort('Asc') }><AiFillCaretUp /></button>
                <button onClick={() => setSort('Desc')}><AiFillCaretDown /></button>
            </div>

        </div>
    </div>
  )
}
