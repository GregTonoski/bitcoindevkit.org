(function() {var implementors = {
"bdk_file_store":[["impl&lt;C&gt; PersistBackend&lt;C&gt; for <a class=\"struct\" href=\"bdk_file_store/struct.Store.html\" title=\"struct bdk_file_store::Store\">Store</a>&lt;C&gt;<div class=\"where\">where\n    C: Append + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div>"]],
"bdk_persist":[],
"bdk_sqlite":[["impl&lt;K, A, C&gt; <a class=\"trait\" href=\"bdk_persist/persist/trait.PersistBackend.html\" title=\"trait bdk_persist::persist::PersistBackend\">PersistBackend</a>&lt;C&gt; for <a class=\"struct\" href=\"bdk_sqlite/struct.Store.html\" title=\"struct bdk_sqlite::Store\">Store</a>&lt;K, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + for&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    A: Anchor + for&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"bdk_persist/changeset/struct.CombinedChangeSet.html\" title=\"struct bdk_persist::changeset::CombinedChangeSet\">CombinedChangeSet</a>&lt;K, A&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"bdk_persist/changeset/struct.CombinedChangeSet.html\" title=\"struct bdk_persist::changeset::CombinedChangeSet\">CombinedChangeSet</a>&lt;K, A&gt;&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()