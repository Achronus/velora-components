import { cn } from "../../lib/utils"

type Props = {
  caption: string
  cells: number[]
  ariaLabel: string
}

export const cellClass = (p: number) =>
  p < 0
    ? "bg-raised"
    : p >= 0.95
      ? "bg-nominal/60"
      : p >= 0.8
        ? "bg-nominal/30"
        : p >= 0.6
          ? "bg-warn/45"
          : "bg-alarm/50"

const CellMap = ({ caption, cells, ariaLabel }: Props) => {
  return (
    <div>
      <div className="mb-1 text-[11px] text-mute">{caption}</div>
      <div
        className="grid w-45 grid-cols-10 gap-0.5"
        role="img"
        aria-label={`Cell map: ${ariaLabel}`}
      >
        {cells.map((p, i) => (
          <span key={i} className={cn("h-3.5 rounded-xs", cellClass(p))}></span>
        ))}
      </div>
    </div>
  )
}

export default CellMap
