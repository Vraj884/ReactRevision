import { useEffect, useState } from "react";

type UserType = {
    id: number;
    name: string;
};

export default function Users() {
    const [allUsers, SetallUsers] = useState<UserType[] | null>(null);
    const [users, Setusers] = useState<UserType[] | null>(null);
    const [input, Setinput] = useState<string>("");

    useEffect(() => {
        fetchUsers((data) => {
            SetallUsers(data);
            Setusers(data);
        }).catch((e) => console.log(e.message));
    }, []);

    const searchFun = () => {
        if (!allUsers || !input.trim()) {
            Setusers(allUsers);
            return;
        }

        const val = input.trim().toLowerCase();

        const filtered = allUsers.filter(
            (x) =>
                x.id.toString() === val || x.name.toLowerCase() === val
        );

        if (filtered.length > 0) {
            Setusers(filtered);
        }
    };

    return (
        <div className="w-screen flex flex-col gap-8">
            <h2 className="bg-amber-200 font-mono text-4xl px-4 py-2">
                All Users List
            </h2>
            <div className="flex gap-4">
                <input
                    type="text"
                    id="inp"
                    placeholder="Search.."
                    className="rounded-2xl bg-amber-200 px-4 py-2 border-2 font-mono"
                    onChange={(e) => Setinput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            searchFun();
                        }
                    }}
                />
                <button
                    onClick={searchFun}
                    className="bg-gray-400 py-2 px-4 rounded-2xl border-2 hover:bg-gray-200 duration-500"
                >
                    Search
                </button>
            </div>

            <div className="flex flex-col gap-4 text-2xl overflow-auto font-bold">
                {users && users.length > 0 ? (
                    users.map((x) => (
                        <div key={x.id} className="w-full flex gap-4">
                            <span className="w-[24px]">{x.id}</span>
                            <span>{x.name}</span>
                        </div>
                    ))
                ) : (
                    <div>No users found!</div>
                )}
            </div>
        </div>
    );
}

async function fetchUsers(
    callback: (data: UserType[]) => void
) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
        throw new Error("Couldn't fetch users");
    }

    const data = await res.json();
    const minimalUsers: UserType[] = data.map(({ id, name }: any) => ({
        id,
        name,
    }));
    callback(minimalUsers);
}
