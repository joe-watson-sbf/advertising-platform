

export default function Container( props: { children: React.ReactNode, className?: string, id?: string } ) {
  return (
    <div id={props.id} className={"container mx-auto " + props.className}>
      {props.children}
    </div>
  )
}
    