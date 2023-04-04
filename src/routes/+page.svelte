<script lang="ts">
	import { RequestAirdrop } from '$lib/index';
	import { walletStore } from '@svelte-on-solana/wallet-adapter-core';
	import { workSpace } from '@svelte-on-solana/wallet-adapter-ui';
	import { balanceStore } from '$stores/balance';
	import type { PublicKey } from '@solana/web3.js';
	import { proposals } from './proposal/[slug]/data';

	$: $walletStore.connected &&
		balanceStore.getUserSOLBalance($walletStore.publicKey as PublicKey, $workSpace.connection);
</script>

<div class="p-4 mx-auto md:hero">
	<div class="flex flex-col md:hero-content">
		<h1
			class="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
		>
			OMC Vote <span class="text-sm font-normal align-top text-slate-700">
				{process.env.VERSION}
			</span>
		</h1>
		<h4 class="my-2 text-center md:w-full text-slate-300">
			<p>DAO governance at it's best.</p>
		</h4>
		<!-- <div class="max-w-md p-6 mx-auto my-2 mockup-code bg-primary">
			<pre data-prefix=">">
		  <code class="truncate">Start building on Solana  </code>
		</pre>
		</div> -->
		<!-- <div class="text-center">
			<RequestAirdrop />
			{#if $walletStore.connected}
				<p>SOL Balance: {($balanceStore.balance || 0).toLocaleString()}</p>
			{/if}
		</div> -->
		<div class="flex flex-row">
			{#each proposals as proposal}
			<div class="card m-2 w-96 bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title">{proposal.title}</h2>
					<p>{proposal.description}</p>
					<div class="card-actions justify-end">
						<a class="btn" href="/proposal/{proposal.id}">Vote</a>
					</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>
