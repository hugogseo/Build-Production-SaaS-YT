import { db } from "../src/lib/db";
import { user } from "../src/lib/schema";
import { eq } from "drizzle-orm";

async function setAdminRole() {
  const email = "green16cancun@gmail.com";

  console.log(`Looking for user with email: ${email}`);

  // Find the user
  const users = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  if (users.length === 0) {
    console.error(`❌ User with email ${email} not found`);
    console.log("Make sure the user has signed in at least once.");
    process.exit(1);
  }

  const currentUser = users[0];
  console.log(`✓ Found user: ${currentUser.name} (${currentUser.email})`);
  console.log(`  Current role: ${currentUser.platformRole}`);

  // Update the user's role to admin
  await db
    .update(user)
    .set({ platformRole: "admin" })
    .where(eq(user.id, currentUser.id));

  console.log(`✓ Successfully updated ${currentUser.email} to admin role`);

  // Verify the update
  const updatedUsers = await db
    .select()
    .from(user)
    .where(eq(user.id, currentUser.id))
    .limit(1);

  console.log(`  New role: ${updatedUsers[0].platformRole}`);
  console.log("\n✨ Done! The user can now access /admin");

  process.exit(0);
}

setAdminRole().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
