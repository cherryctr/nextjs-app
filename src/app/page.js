import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>HALAMAN HOME</h1>
			<br />
			<Link href="/post">POST</Link>
			<br />
			<Link href="/album">ALBUM</Link>
		</>
	);
}
