# Test Plan: Vanilla Store + Custom Hook

1. **Goal**: Verify that state changes in the vanilla store trigger re-renders in React components via `useStore`.
2. **Files to Create**:
   - `src/store/testStore.ts`: To hold the global state.
   - `src/app/test/page.tsx`: To demonstrate the usage.
3. **Success Criteria**:
   - Clicking the button in Component A updates the UI in Component B.
   - No "Exhaustive Dependencies" warnings in Biome.
