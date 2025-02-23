import { Card, Avatar } from "@radix-ui/themes";

function LeaderBoard() {
  const topUsers = [
    { name: "Sarah Johnson", points: 2456, image: "/placeholder.svg" },
    { name: "Mike Smith", points: 2123, image: "/placeholder.svg" },
    { name: "Emma Davis", points: 1987, image: "/placeholder.svg" },
  ];

  return (
    <>
      <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm">
        <div className="p-3 pb-6">
          <span className="text-xl font-semibold ">Top Contributors</span>
        </div>

        <div className="space-y-4 p-3 pt-0">
          {topUsers.map((user, index) => (
            <div key={user.name} className="flex items-center gap-4">
              <div className="relative">
                <Avatar src={user.image} fallback={user.name[0]}></Avatar>
                <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium">{user.name}</p>
                <p className="text-xs text-textSecondary">
                  {user.points} points
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default LeaderBoard;
