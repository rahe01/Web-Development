import Link from "next/link";


export default function AboutContents() {
  return (
    <div>
      thsi is about contents 
     <Link href={'/services'}>Services</Link>
     <Link href={'/About/history'}>History</Link>
     <Link href={'/About/history/vision'}>Vision</Link>
      
    </div>
  )
}
