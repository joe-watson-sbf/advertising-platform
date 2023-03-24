import Container from "./container";

export default function Stats() {

    return (
        <Container id="stats" className="flex justify-center bg-slate-50 default-shadow py-24 sm:py-32 rounded-3xl mt-32 ">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-primary-fade">Transactions every 24 hours</dt>
                        <dd className="order-first text-6xl font-light tracking-tight text-primary sm:text-5xl">44 million</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-primary-fade">Assets under holding</dt>
                        <dd className="order-first text-6xl font-light tracking-tight text-primary sm:text-5xl">$119 trillion</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-primary-fade">New users annually</dt>
                        <dd className="order-first text-6xl font-light tracking-tight text-primary sm:text-5xl">46,000</dd>
                    </div>
                </dl>
            </div>

        </Container>
    )

}