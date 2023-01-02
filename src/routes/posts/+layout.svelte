<div class="posts">
    <aside>
        <h4>Posts</h4>

        <nav>
            <ul>
                <li>
                    <a href="/posts/one">One</a>
                </li>
                <li>
                    <a href="/posts/two">Two</a>
                </li>
            </ul>
        </nav>
    </aside>
    <main>
        <slot/>
    </main>
</div>

<style>
    .posts {
        display: grid;
        grid-template-columns: 300px 60ch;
        gap: 2rem;
        margin-top: 2rem;
    }
</style>