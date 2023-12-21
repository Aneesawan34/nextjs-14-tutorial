export default function Layout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {users}
          {revenue}
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}
