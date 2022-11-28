import { sveltekit } from "@sveltejs/kit/vite"
import type { UserConfig } from "vite"

const config: UserConfig = {
  plugins: [sveltekit()],
	// ssr: { noExternal: ['@popperjs/core'] }
}

export default config